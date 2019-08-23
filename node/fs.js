'use strict';

const fs = require('fs');
// 异步删除文件
// fs.unlink('./hello.txt', (err) => {
//   if (err) throw err;
//   console.log('已成功删除 hello');
// });

// 同步删除文件
// fs.unlinkSync('./hello.txt');
// console.log('已成功删除 ./hello.txt');

// 重命名
// fs.rename('./hello.txt', './world.txt', (err) => {
//   if (err) throw err;
//   console.log('重命名完成');
// });

// 文件属性
// fs.stat('world.txt', function (err, stat) {
//   if (err) {
//       console.log(err);
//   } else {
//       // 是否是文件:
//       console.log('isFile: ' + stat.isFile());
//       // 是否是目录:
//       console.log('isDirectory: ' + stat.isDirectory());
//       if (stat.isFile()) {
//           // 文件大小:
//           console.log('size: ' + stat.size);
//           // 创建时间, Date对象:
//           console.log('birth time: ' + stat.birthtime);
//           // 修改时间, Date对象:
//           console.log('modified time: ' + stat.mtime);
//       }
//   }
// });

// 文件读取
// fs.readFile('world.txt', 'utf-8', function (err, data) {
//   if (err) {
//       console.log(err);
//   } else {
//       console.log(data);
//   }
// });

// 写文件
// var data = 'Hello, Node.js';
// fs.writeFile('output.txt', data, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('ok.');
//     }
// });
// 写文件 同步
var data = 'Hello, Node.js';
fs.writeFileSync('output.txt', data);