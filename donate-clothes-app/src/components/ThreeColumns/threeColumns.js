import React from 'react';
import FadeIn from "react-fade-in";

const ThreeColumns = () => {
    return (
        <article className="threeColumnsContainer">
            <section className="threeColumnsLeftSection">
                <FadeIn>
                <div className="threeColumnsNumber">10</div>
                <h2>ODDANYCH WORKÓW</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisc <br/>
                    Pellentesque vel enim a elit viverra elementuma <br/>
                    Alliquam erat volutpat.
                </p>
                </FadeIn>
            </section>
            <section className="threeColumnsMiddleSection">
                <FadeIn>
                <div className="threeColumnsNumber">5</div>
                <h2>WSPARTYCH ORGANIZACJI</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisc <br/>
                    Pellentesque vel enim a elit viverra elementuma <br/>
                    Alliquam erat volutpat.
                </p>
                </FadeIn>
            </section>
            <section className="threeColumnsRightSection">
                <FadeIn>
                <div className="threeColumnsNumber">7</div>
                <h2>ZORGANIZOWANYCH ZBIÓREK</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisc <br/>
                    Pellentesque vel enim a elit viverra elementuma <br/>
                    Alliquam erat volutpat.
                </p>
                </FadeIn>
            </section>
        </article>
    );
};

export default ThreeColumns;