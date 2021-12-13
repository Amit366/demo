import React from "react";
import blackboardSvg from "../../Images/blackboard-svg.svg";
import computerSvg from "../../Images/computer-svg.svg";
import addCircleSvg from "../../Images/add-circle.svg";
import { Link } from "react-router-dom";
import "./styles.css";

export function LearnMore() {
  return (
    <section className="learn-more">
      <article className="list-computer">
        <ul>
          <li>
            <p>Networking</p>
            <small className="topic computer-topic">Computer</small>
            <img src={computerSvg} alt="Computer icon" />
            <Link to="/">+</Link>
          </li>
          <li>
            <p>DBMS</p>
            <small className="topic computer-topic">Computer</small>
            <img src={computerSvg} alt="Computer icon" />
            <Link to="/">+</Link>
          </li>
          <li>
            <p>Computational Physics</p>
            <small className="topic computer-topic">Computer</small>
            <img src={computerSvg} alt="Computer icon" />
            <Link to="/">+</Link>
          </li>
        </ul>
      </article>

      <article className="list-science">
        <ul>
          <li className="science">
            <p>Maths</p>
            <small className="topic science-topic">Science</small>
            <img src={blackboardSvg} alt="Icon" />
            <div class="dropdown">
              <Link className="plus" to="/">
                <img
                  src={addCircleSvg}
                  className="lower-plus"
                  alt="AddCircle"
                />
              </Link>
              <div class="dropdown-content">
                <Link to="/">Calculator</Link>
                <Link to="/">Questions</Link>
              </div>
            </div>
          </li>
          <li className="science">
            <p>Physics</p>
            <small className="topic science-topic">Science</small>
            <img src={blackboardSvg} alt="Icon" />
            <div class="dropdown">
              <Link className="plus" to="/">
                <img
                  src={addCircleSvg}
                  className="lower-plus"
                  alt="AddCircle"
                />
              </Link>
              <div class="dropdown-content">
                <Link to="/physics">Calculator</Link>
                <Link to="/questions">Questions</Link>
                <Link to="/quiz">Quiz</Link>
              </div>
            </div>
          </li>
        </ul>
      </article>
      <p className="FAQ">Frequently Asked Questions</p>
      <div class="faq">
        <input id="faq-a" type="checkbox" />
        <label for="faq-a">
          <p class="faq-heading">What is this Website for?</p>
          <div class="faq-arrow"></div>
          <p class="faq-text">
            This website is to make your physics easy. Just enter the values
            into the formula and you will get the answer with the procedure.!
          </p>
        </label>
        <input id="faq-b" type="checkbox" />
        <label for="faq-b">
          <p class="faq-heading">How to use this Website?</p>
          <div class="faq-arrow"></div>
          <p class="faq-text">
            Just click on the Learn button on the homepage. Then choose the
            branch of physics and click on it. Next on the contents page choose
            the topic and then enjoy with the calculator.
          </p>
        </label>
        <input id="faq-c" type="checkbox" />
        <label for="faq-c">
          <p class="faq-heading">How to contact us?</p>
          <div class="faq-arrow"></div>
          <p class="faq-text">
            on the navbar click on contact us and then write your queries or
            follow us on our social media handles.
          </p>
        </label>
      </div>
    </section>
  );
}
