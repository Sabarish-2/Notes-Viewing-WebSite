const react = require("react");

function Footer() {
  const currTime = new Date().getHours();
  const currTime1 = new Date().getMinutes();
  const currTime2 = new Date().getSeconds();
  const currTime3 = new Date().getMilliseconds();
  return (
    <footer>
      <p>
        CopyRight @ {currTime}:{currTime1}:{currTime2}:{currTime3}
      </p>
    </footer>
  );
}

export default Footer;
