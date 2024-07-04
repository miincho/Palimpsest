import React, { useRef, useEffect } from 'react';
import Footer from '../components/Footer.jsx'
import '../css/M001.css'
import p5 from 'p5';

const P5Component = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let font;
      let x, y;
      let xspeed = 0.8;
      let yspeed = 0.8;
      let r = 2.5;

      p.preload = function () {
        font = p.loadFont('../assets/hell-med.ttf');
      };

      p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        x = p.random(r, p.width - r);
        y = p.random(r, p.height - r);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(Math.min(p.windowWidth, p.windowHeight) * 0.1);
      };

      p.draw = function () {
        p.background(0);
        p.ellipse(x, y, r * 2, r * 2);
        x += xspeed;
        y += yspeed;
        if (x > p.width - r || x < r) {
          xspeed = -xspeed;
        }
        if (y > p.height - r || y < r) {
          yspeed = -yspeed;
        }
        p.fill(255);
        p.textFont(font);
        p.text("DESIRE PATHS", p.width / 2, p.height / 2);
        p.blendMode(p.DIFFERENCE);

        p.stroke(255);
        p.strokeWeight(2);
        p.line(x, y, p.mouseX, p.mouseY);
        p.circle(p.mouseX, p.mouseY, 5);
      };

      p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const p5Instance = new p5(sketch, canvasRef.current);
    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={canvasRef}></div>;
};

export default P5Component;
