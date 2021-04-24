import axios from "axios";
import React from "react";
import PortInfo from "../basics/PortInfo";
import Header from "../Header";
import Layout from "../Layout";
import Footer from "../Footer";
import WrapTitle from "../basics/WrapTitle";
import Loader from "../basics/Loader";


class Portfolio extends React.Component {
  state = {
    isLoading : true,
    ports : [], //포트폴리오 내용 저장할 곳
  };

  getPorts = async () => {
    const {
      data:{
      data:{ports},
    }} = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json");

    //데이터 저장완료시 로딩 종료시키기
    // this.setState({ ports: ports, isLoading: false})
    this.setState({ ports, isLoading: false})
  }
  

  componentDidMount(){
    setTimeout(() => {
      // this.setState({ isLoading: false });
      this.getPorts();
    },3000);
  }

  //출력할때
  render(){
    const {isLoading, ports} = this.state;
    return (
      <div>
        {isLoading ?
          (
          <Loader />
          )
          :
          (
            <div id="wrap">
              <Header />
              <Layout>
                <section id="portCont">
                  <div class="container">
                    <WrapTitle text={["portfolio","site"]} />
                    <div className = "port__cont">
                      {ports.map((port) => (
                        <PortInfo
                          key = {port.id}
                          link = {port.link}
                          title = {port.title}
                          image = {port.image}
                          category = {port.category}
                        />
                      ))}
                    </div>
                  </div>
                </section>
              </Layout>
              <Footer />
            </div>
          )
        }
      </div>
    )
  }
}

export default Portfolio;