import { useEffect, useReducer, useState } from "react";

const STORAGE_KEY = "react-course-tracker-v1";
const fallbackCourses = [
  { id: "react-intro", title: "React មូលដ្ឋាន", category: "Frontend", completed: false },
  { id: "javascript-review", title: "ពិនិត្យ JavaScript", category: "JavaScript", completed: true },
];

function isCourse(value) {
  return value !== null
    && typeof value === "object"
    && typeof value.id === "string"
    && typeof value.title === "string"
    && typeof value.category === "string"
    && typeof value.completed === "boolean";
}

function loadCourses() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === null) return fallbackCourses;
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed.filter(isCourse) : fallbackCourses;
  } catch {
    return fallbackCourses;
  }
}

function courseReducer(courses, action) {
  switch (action.type) {
    case "added":
      return [action.course, ...courses];
    case "toggled":
      return courses.map((course) =>
        course.id === action.id
          ? { ...course, completed: !course.completed }
          : course
      );
    case "deleted":
      return courses.filter((course) => course.id !== action.id);
    default:
      throw new Error("មិនស្គាល់ course action");
  }
}

function createId() {
  return globalThis.crypto?.randomUUID?.()
    ?? Date.now().toString(36) + Math.random().toString(36).slice(2);
}

export default function App() {
  const [courses, dispatch] = useReducer(courseReducer, undefined, loadCourses);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const [storageWarning, setStorageWarning] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
      setStorageWarning("");
    } catch {
      setStorageWarning("មិនអាចរក្សាទុកក្នុង browser បានទេ។ ការផ្លាស់ប្តូរអាចបាត់ពេលបិទទំព័រ។");
    }
  }, [courses]);

  const visibleCourses = courses.filter((course) => {
    const searchText = (course.title + " " + course.category).toLowerCase();
    return searchText.includes(query.trim().toLowerCase());
  });
  const completedCount = courses.filter((course) => course.completed).length;

  function handleSubmit(event) {
    event.preventDefault();
    const cleanTitle = title.trim();
    if (!cleanTitle) {
      setMessage("សូមបញ្ចូលឈ្មោះវគ្គសិក្សា។");
      return;
    }

    dispatch({
      type: "added",
      course: {
        id: createId(),
        title: cleanTitle,
        category: category.trim() || "ទូទៅ",
        completed: false,
      },
    });
    setTitle("");
    setCategory("");
    setMessage("បានបន្ថែមវគ្គសិក្សា។");
  }

  return (
    <main className="app-shell">
      <header className="page-header">
        <p className="eyebrow">React practice project</p>
        <h1>កម្មវិធីតាមដានការរៀន</h1>
        <p>រៀបចំវគ្គសិក្សា និងសម្គាល់អ្វីដែលបានបញ្ចប់។</p>
      </header>

      <section className="summary" aria-label="ស្ថិតិការរៀន">
        <strong>{completedCount} / {courses.length}</strong>
        <span>វគ្គបានបញ្ចប់</span>
      </section>

      <section className="panel" aria-labelledby="add-course-heading">
        <h2 id="add-course-heading">បន្ថែមវគ្គសិក្សា</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="course-title">ឈ្មោះវគ្គ</label>
          <input
            id="course-title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            maxLength={100}
            required
          />
          <label htmlFor="course-category">ប្រភេទ</label>
          <input
            id="course-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            maxLength={40}
          />
          <button type="submit">បន្ថែមវគ្គ</button>
        </form>
        <p className="status" role="status" aria-live="polite">{message}</p>
        {storageWarning && <p className="warning" role="status">{storageWarning}</p>}
      </section>

      <section className="panel" aria-labelledby="course-list-heading">
        <h2 id="course-list-heading">វគ្គរបស់ខ្ញុំ</h2>
        <label htmlFor="course-search">ស្វែងរកវគ្គ</label>
        <input
          id="course-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        {visibleCourses.length === 0 ? (
          <p>រកមិនឃើញវគ្គដែលត្រូវនឹងការស្វែងរកទេ។</p>
        ) : (
          <ul className="course-list">
            {visibleCourses.map((course) => (
              <li className="course-card" key={course.id}>
                <div>
                  <h3>{course.title}</h3>
                  <p>{course.category}</p>
                  <p>{course.completed ? "បានបញ្ចប់" : "កំពុងរៀន"}</p>
                </div>
                <div className="actions">
                  <button
                    type="button"
                    aria-pressed={course.completed}
                    onClick={() => dispatch({ type: "toggled", id: course.id })}
                  >
                    {course.completed ? "កំណត់ថាកំពុងរៀន" : "សម្គាល់ថារួច"}
                  </button>
                  <button
                    type="button"
                    className="secondary"
                    onClick={() => dispatch({ type: "deleted", id: course.id })}
                    aria-label={"លុបវគ្គ " + course.title}
                  >
                    លុប
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
