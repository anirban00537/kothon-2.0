import "./Home.css";

const Home = () => {
  return (
    <div className="home Home">
      <div className="first parent_home_first">
        <div className="first_home">
          <div className="slogan">
            <h1>Stay productive with Kothon</h1>
            <p className="slogan_p">
              We provide comprehensive solution for all your office
              communications.
            </p>
            <button className="btn btn_getIt">Get It Now</button>
          </div>
        </div>
      </div>
      <div className="second second_mobile_part">
        <div className="image_second_mobile"></div>
      </div>
    </div>
  );
};

export default Home;
