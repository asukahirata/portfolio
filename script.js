'use strict';
// 年号を自動更新（アニメーションなどが不要ならJSはこれだけでOKです）
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
