const [, , ...args] = process.argv;
const n = args.reduce((acc, arg) => acc + Number(arg), 0);

process.stdout.write(n.toString() + "\n");
