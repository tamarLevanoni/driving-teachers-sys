import './HomePage.css'
const HomePage = () => {
  return (
    <div className="homePage">
      <button className="setting">
      </button>
      <h1>ברוכים הבאים למערכת ניהול תלמידים</h1>
      <container className="buttons">
        <button className="reports main">דוחו"ת</button>
        <button className="diary main">יומן</button>
        <button className="students main">תלמידים</button>
      </container>
      <footer>
      <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <a href='https://www.freepik.com/vectors/background'>Background vector created by vectorpouch - www.freepik.com</a>
      </footer>
    </div>
  );
};

export default HomePage;
