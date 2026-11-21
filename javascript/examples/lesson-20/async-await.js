function wait(milliseconds, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), milliseconds));
}

async function main() {
  try {
    const message = await wait(200, "ទិន្នន័យបានមកដល់");
    console.log(message);
  } catch (error) {
    console.error("ការងារបរាជ័យ៖", error);
  }
}

main();
