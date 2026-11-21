# មេរៀនទី ២៧៖ Asyncio និង asynchronous I/O

## គោលដៅ

- យល់ពី coroutine, await និង event loop។
- ប្រើ <code>asyncio</code> សម្រាប់ការងាររង់ចាំ I/O ច្រើន។
- ដឹងពេលណា async មិនជួយ និងរបៀបកំណត់ timeout/cancellation។

## ១. Coroutine ដំបូង

~~~python
import asyncio

async def greet():
    print("ចាប់ផ្តើម")
    await asyncio.sleep(1)
    print("បញ្ចប់")

asyncio.run(greet())
~~~

<code>async def</code> បង្កើត coroutine function។ <code>await</code> ផ្អាក coroutine ដើម្បីអោយ event loop ដំណើរការ task ផ្សេងពេលការងារកំពុងរង់ចាំ។ <code>asyncio.run()</code> បង្កើត និងបិទ event loop សម្រាប់ script ធម្មតា។

## ២. ដំណើរការ task ជាមួយគ្នា

~~~python
async def work(name, delay):
    await asyncio.sleep(delay)
    return f"{name} រួចរាល់"

async def main():
    results = await asyncio.gather(
        work("A", 1),
        work("B", 1),
    )
    print(results)

asyncio.run(main())
~~~

ការងាររង់ចាំពីរអាច overlap ដូច្នេះរយៈពេលជិតនឹងការងារមួយ បើគ្មាន resource bottleneck។ ក្នុងកម្មវិធីពិត ប្រើ async HTTP/database client ដែល support asyncio; ការហៅ function synchronous ដែល block នៅក្នុង event loop អាចបញ្ឈប់ task ទាំងអស់។

## ៣. Timeout និង cancellation

កំណត់ timeout លើការរង់ចាំដែលអាចព្យួរ ហើយសរសេរ cleanup ដែលធន់នឹង cancellation។ កុំចាប់ cancellation ហើយបន្តដូចមិនមានអ្វីកើតឡើង លុះត្រាតែមានហេតុផលច្បាស់។

## ៤. Async មិនមែន CPU parallelism

Asyncio ល្អសម្រាប់ I/O ច្រើនក្នុង thread មួយ។ វាមិនបំបែកគណនាធ្ងន់ទៅ core ច្រើនដោយស្វ័យប្រវត្តិទេ។ សម្រាប់ CPU-bound ពិចារណា process pool ឬឧបករណ៍សមស្រប។

## លំហាត់

បង្កើត coroutine ដែលធ្វើ simulated I/O ៣ ដោយ <code>asyncio.sleep</code>។ ប្រៀបធៀបពេលរត់ជាប់គ្នា និង <code>gather</code> ហើយបន្ថែម timeout។

## ប្រភព

[asyncio — Asynchronous I/O](https://docs.python.org/3/library/asyncio.html)
