import React from 'react';
import Header from "../Header";
import Layout from '../Layout';
import Footer from '../Footer';
import WrapTitle from '../basics/WrapTitle';

function script() {
  return (
    <div id="wrap" className="light">
      <Header info="none" />
      <Layout>
        <section id="scriptCont">
          <div className="container">
          <WrapTitle text={["script", "coding"]} />
            <div className="script-cont">
              <div className="script">
                <div className="view">
                  <img src="img/script01.png" alt="aaa" />
                </div>
                <div className="desc">
                  <h3>animationRequestFrame</h3>
                  <div>레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.</div>
                  <div>레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.</div>
                  <div className="num">
                    <span href="#" className="active">1</span>
                    <span href="#">2</span>
                    <span href="#">3</span>
                    <span href="#">4</span>
                    <span href="#">5</span>
                    <span href="#">6</span>
                    <span href="#">7</span>
                    <span href="#">8</span>
                    <span href="#">9</span>
                    <span href="#">10</span>
                  </div>
                </div>
              </div>
              <div className="script">
                <div className="view">
                  <img src="img/script02.png" alt="aaa" />
                </div>
                <div className="desc">
                  <h3>animationRequestFrame</h3>
                  <div>레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.</div>
                  <div>레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다. 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.</div>
                  <div className="num">
                    <span href="#" className="active">1</span>
                    <span href="#">2</span>
                    <span href="#">3</span>
                    <span href="#">4</span>
                    <span href="#">5</span>
                    <span href="#">6</span>
                    <span href="#">7</span>
                    <span href="#">8</span>
                    <span href="#">9</span>
                    <span href="#">10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
      <Footer/>
    </div>
  );
}

export default script;