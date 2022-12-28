<template>
  <main id="contact-page-container">
    <table>
      <caption>喆麗生技有限公司</caption>
      <tbody>
        <tr>
          <td>門市地址：</td>
          <td>624嘉義縣義竹鄉仁里村405-1號</td>
        </tr>
        <tr>
          <td>電話：</td>
          <td><a href="tel:+88653416565">+886-5-3416565</a></td>
        </tr>
        <tr>
          <td>傳真：</td>
          <td>+886-5-3412525</td>
        </tr>
        <tr>
          <td>手機：</td>
          <td><a href="tel:+886963657877">+886-963-657-877</a></td>
        </tr>
        <tr>
          <td>電子信箱：</td>
          <td><a href="mailto:jielib6565@gmail.com">jielib6565@gmail.com</a></td>
        </tr>
        <tr>
          <td>Line 客服 ID：</td>
          <td>053416565</td>
        </tr>
      </tbody>
    </table>
    <div class="QR-section">
      <div>
        <img src="../Assets/images/qrcode/line.png" />
        <span>喆麗生技 Line 客服</span>
      </div>
      <div>
        <img src="../Assets/images/qrcode/fb.png" />
        <span>FB粉絲專頁：喆麗生技</span>
      </div>
    </div>
  </main>
</template>
<style scoped>
main#contact-page-container {
  display: flex;
  width: 100vw;
  height: calc(100vh - 72px);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 10px;
}

caption {
  font-size: 1.6rem;
  margin: 10px;
}

caption::after {
  content: '';
  display: block;
  width: 100%;
  padding: 3px 0;
  border-bottom: 1px solid black;
}

table tr > td:first-child {
  text-align: right;
}

table td {
  padding: 3px 5px;
  font-size: 1rem;
}

table a {
  color: inherit;
}

.QR-section {
  display: flex;
  column-gap: 20px;
}

.QR-section img {
  width: 100px;
  display: block;
  margin: auto;
}

.QR-section span {
  text-align: center;
}
@media screen and (max-width: 400px) {
  table td {
    font-size: 0.9rem;
  }
}
</style>
