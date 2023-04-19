const url = $request.url;
const pattern = /^https:\/\/h5api\.m\.taobao\.com\/h5\/mtop\./;

if (pattern.test(url)) {
  const cookie = $request.headers['Cookie'];
  $persistentStore.write(cookie, 'taobao_cookie');
  console.log(`Successfully saved Taobao cookie: ${cookie}`);
}
