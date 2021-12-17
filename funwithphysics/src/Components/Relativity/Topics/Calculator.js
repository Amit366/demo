import React, { useState } from "react";
import "./Calculator.css";
import { Form, Button } from "react-bootstrap";
import "../Relativity.css";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";

function Calculator({ match }) {
  // topics_data
  const Topics = [
    {
      topic: "Mass Energy Relation",
      details: `The Einstein's special relativity equation "E = mc²" states that mass and energy are the same physical object that may be converted into one another. The kinetic energy (E) of a body is equal to its enhanced relativistic mass (m) times the speed of light squared (c²) in the equation, where the speed of light is 3x10⁸m/s`,
      formula: "E=MC²",
      process:
        "To find the the energy we need to know the value of mass & we can easily calculate mass if we have the value of energy. where as the value of speed of light is 3x10⁸m/s",
      siunit: ["Energy: joule", <br />, "Mass: kg"],
      dimension: ["Energy: M L² T⁻²", <br />, "mass: M"],
    },
    {
      topic: "Relativistic Kinetic Energy",
      details:
        "Relativistic effects can be observed if an object moves at least 1% of the speed of light. In this scenario, you must compute the kinetic energy using the formula KE= E-PE, where E = mc2 and PE = m0c2.",
      formula: "KE = m₀c² * [√(1- v²/c²) - 1]",
      process:
        "To find the kinetic energy we need to know the value of mass (m₀) and velocity of the body(v) where  the value of speed of light is 3x10⁸m/s",
      siunit: [
        "Kinetic Energy: joule",
        <br />,
        "Mass: kg",
        <br />,
        "Velocity: m/s",
      ],
      dimension: "Kinetic Energy: M L² T⁻²",
    },
    {
      topic: "Relativistic Velocity",
      details:
        "Relativistic effects can be observed if we combine time dilation and length contraction. In this scenario, you must compute the velocity using the formula  u = (v+w) / (1+(v * w)/c²). When the speed of the spacecraft or the projectile is less than the speed of light, the formula becomes u = v + w, which is the total of the velocities. If the velocities v and w are both high, the projectile's speed as perceived from outside the spacecraft is substantially lower than the sum of the two speeds v + w and never reaches the speed of light.",
      formula: " u = (v+w)/(1+(v*w)/c²)",
      process:
        "To find the relativistic velocity we need to know the value of speed of object (v) and speed of the projectile as seen from spaceship (w) where  the value of speed of light is 3x10⁸m/s",
      siunit: "Velocity: m/s",
      dimension: "Velocity: L T⁻¹",
    },
    {
      topic: "Time Dilation",
      details:
        "Time dilation is a measure of the elapsed time that we measure using two clocks. You can presumably see (or have already learned from playing with our time dilation calculator) that the observer speed must be extraordinarily high - on the same order of magnitude as the speed of light - for the difference in the two time spans to be evident. That is why relativistic effects are so perplexing: we cannot observe them in ordinary life.",
      formula: "Δt = Δt₀ / √(1 - v²/c²)",
      process:
        "To find the time dilation we need to know the value of velocity (v) and proper time (Δt₀) where  the value of speed of light is 3x10⁸m/s",
      siunit: "Time dilation: seconds",
      dimension: "Time dilation : T",
    },
    {
      topic: "Length Contraction",
      details:
        "Relativity can be observed when object travels with speed of light and there length contraction comes into the picture. The speed must be very high - equivalent to the speed of light - for the impact of length contraction to be evident. We have no experience with items travelling at such high speeds in our daily lives. As a result, the implications of special relativity are quite perplexing.",
      formula: "Relative Length = L * √(1 - v²/c²)",
      process:
        "Because, in addition to the great speed required, measuring the length of an item moving with regard to us is difficult, the consequences of length contraction are difficult to perceive. To find the length contraction we need to know the value of length (L) and speed of object (v) where  the value of speed of light is 3x10⁸m/s",
      siunit: "Relative Length: metres",
      dimension: "Relative Length : L",
    },
  ];

  const page = Topics.filter((data) => data.topic === match.params.topic);
  const details = page[0];

  //Mass Energy Relation calculator
  const MassEnergyCalculator = () => {
    const [choice, setChoice] = useState("Energy");
    const [mass, setMass] = useState(null);
    const [energy, setEnergy] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setMass(null);
      setEnergy(null);
      setResult(null);
    };
    const C = 3 * Math.pow(10, 8);

    const handleChange = (e) => {
      setChoice(e.target.value);
      reset();
    };
    const calcResult = () => {
      let res;
      if (choice === "Energy") {
        res = mass * C * C;
      } else if (choice === "Mass") {
        res = energy / (C * C);
      }
      setResult(res);
    };
    const choiceData = () => {
      if (choice === "Energy")
        return {
          name: "Energy",
          mainunit: "joule",
        };
      if (choice === "Mass")
        return {
          name: "Mass",
          mainunit: "kg",
        };
    };
    return (
      <>
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option value="Energy">Energy (E)</option>
              <option value="Mass">Mass (M)</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                {" "}
                To find the {choiceData().name}, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          {choice === "Energy" ? (
            <Form.Group className="mb-4">
              <Form.Label>Mass (M)</Form.Label>
              <Form.Control
                onChange={(e) => setMass(e.target.value)}
                type="number"
                placeholder={"Enter in kg"}
                value={mass === null ? "" : mass}
              />
            </Form.Group>
          ) : (
            <Form.Group className="mb-4">
              <Form.Label>Energy (E)</Form.Label>
              <Form.Control
                onChange={(e) => setEnergy(e.target.value)}
                type="number"
                placeholder={"Enter in joule"}
                value={energy === null ? "" : energy}
              />
            </Form.Group>
          )}
          <Form.Group className="mb-4">
            <Form.Label>Speed of ligth (C)</Form.Label>
            <Form.Control readOnly type="number" placeholder={"3 * 10⁸ m/s"} />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === null
                  ? "Result"
                  : result + " " + choiceData().mainunit
              }
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };
  //Relativistic kinetic energy
  const RelativeKECalculator = () => {
    const [mass, setMass] = useState(null);
    const [velocity, setVelocity] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setMass(null);
      setVelocity(null);
      setResult(null);
    };
    const c = 3 * Math.pow(10, 8);

    const calcResult = () => {
      let res;
      let vel = Math.pow(velocity, 2) / Math.pow(c, 2);
      res = mass * Math.pow(c, 2) * [Math.sqrt(1 - vel) - 1];
      setResult(res);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label> Mass (m₀)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setMass(e.target.value);
              }}
              placeholder="Enter the mass of body"
              value={mass === null ? "" : mass}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label> Velocity (v)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setVelocity(e.target.value);
              }}
              placeholder="Enter the value of velocity"
              value={velocity === null ? "" : velocity}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label> Speed of light (c)</Form.Label>
            <Form.Control
              readOnly
              // type="number"
              placeholder={"3 * 10⁸ m/s"}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : `${result} T`}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };
  // Relativistic velocity
  const RelativeVelocityCalculator = () => {
    const [speed, setSpeed] = useState(null);
    const [pspeed, setPSpeed] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setSpeed(null);
      setPSpeed(null);
      setResult(null);
    };
    const c = 3 * Math.pow(10, 8);

    const calcResult = () => {
      let res;
      let vel = (speed * pspeed) / Math.pow(c, 2);
      let add = parseFloat(speed) + parseFloat(pspeed);
      res = add / (1 + parseFloat(vel));
      setResult(res);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label> Speed (v)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setSpeed(e.target.value);
              }}
              placeholder="Enter the speed of object"
              value={speed === null ? "" : speed}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label> Speed of projectile (w)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setPSpeed(e.target.value);
              }}
              placeholder="Enter the value of speed of projectile"
              value={pspeed === null ? "" : pspeed}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label> Speed of light (c)</Form.Label>
            <Form.Control
              readOnly
              // type="number"
              placeholder={"3 * 10⁸ m/s"}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : `${result} m/s`}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };
  // time dilation
  const TimeDilationCalculator = () => {
    const [velocity, setVelocity] = useState(null);
    const [time, setTime] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setVelocity(null);
      setTime(null);
      setResult(null);
    };
    const c = 3 * Math.pow(10, 8);

    const calcResult = () => {
      let res;
      let vel = Math.sqrt(1 - Math.pow(velocity, 2) / Math.pow(c, 2));
      res = parseFloat(time / vel);
      setResult(res);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label> Velocity (v)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setVelocity(e.target.value);
              }}
              placeholder="Enter the value of velocity"
              value={velocity === null ? "" : velocity}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label> Time (Δt₀)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setTime(e.target.value);
              }}
              placeholder="Enter the value of proper time"
              value={time === null ? "" : time}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label> Speed of light (c)</Form.Label>
            <Form.Control
              readOnly
              // type="number"
              placeholder={"3 * 10⁸ m/s"}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : `${result} sec`}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  //Length Contraction
  const LengthContractionCalculator = () => {
    const [velocity, setVelocity] = useState(null);
    const [length, setLength] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setVelocity(null);
      setLength(null);
      setResult(null);
    };
    const c = 3 * Math.pow(10, 8);

    const calcResult = () => {
      let res;
      let vel = Math.sqrt(1 - Math.pow(velocity, 2) / Math.pow(c, 2));
      res = length * vel;
      setResult(res);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label> Speed (v)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setVelocity(e.target.value);
              }}
              placeholder="Enter the value of speed"
              value={velocity === null ? "" : velocity}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label> Length(L)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setLength(e.target.value);
              }}
              placeholder="Enter the value of length of object"
              value={length === null ? "" : length}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label> Speed of light (c)</Form.Label>
            <Form.Control
              readOnly
              // type="number"
              placeholder={"3 * 10⁸ m/s"}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : `${result} metres`}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  //adding the calculators togather
  function calC(key) {
    let currentCall;
    switch (key) {
      case "Mass Energy Relation":
        currentCall = MassEnergyCalculator();
        break;
      case "Relativistic Kinetic Energy":
        currentCall = RelativeKECalculator();
        break;
      case "Relativistic Velocity":
        currentCall = RelativeVelocityCalculator();
        break;
      case "Time Dilation":
        currentCall = TimeDilationCalculator();
        break;
      case "Length Contraction":
        currentCall = LengthContractionCalculator();
        break;
      default:
        break;
    }
    return currentCall;
  }
  return (
    <React.Fragment>
      <Navbar />
      <div className="Calculator__main">
        <Helmet>
          <title>{details.topic}</title>
          <meta name="description" content="{details.details}" />
          <meta
            name="keywords"
            content="Relativity, calculator, Relativity calculator, physics, Tech n science, technscience, tech and science"
          />
        </Helmet>

        <div className="Calculator__header">
          <h1>{details.topic}</h1>
        </div>
        <div className="Calculator__details">
          <p>{details.details}</p>
        </div>
        <div className="Calculator__formula">
          <h3>Working Formula:</h3>
          <h3>{details.formula}</h3>
          <h3>S.I. Unit : {details.siunit}</h3>
          <h3>Dimension : {details.dimension}</h3>
        </div>
        <div className="Calculator__process">
          <h3> Process</h3>
          <p>{details.process}</p>
        </div>
        <div className="Calculator__calc">
          <h3>{details.topic} Calculator</h3>
          <hr />
          {calC(details.topic)}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Calculator;
