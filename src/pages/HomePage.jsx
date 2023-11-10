import { Container, Row, Col } from "react-bootstrap";
import heroImage from "../assets/img/hero.png";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-item-center">
        <Container className="container-homepage">
          <Row className="header-box d-flex justify-content-center align-item-center">
            <Col>
              <h1>
                Temukan <br />
                <span>Bakat Kreatifmu</span> <br /> Bersama Kami !
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ipsam laboriosam, atque eum expedita omnis.
              </p>
              <button className="btn btn-danger btn-lg rounded-1 me-2">
                Lihat Kelas
              </button>
              <button>Lihat Promo</button>
            </Col>
            <Col>
              <img src={heroImage} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100"></div>
    </div>
  );
};

export default HomePage;
