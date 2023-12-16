setTimeout(() => {
  throw new Error('ops');
}, 300);

process.on('uncaughtException', () => {});

// this is for async
process.on('unhandledRejection', () => {});
