window.onload = function () {
    console.log(document.getElementById("path1"));
    document.getElementsByTagName("svg")[0].addEventListener("mousemove", (e) => {
      console.log(e.offsetX, e.offsetY);
      document
        .querySelector("#path1")
        .setAttribute("d", `M 2 2 Q${e.offsetX},${e.offsetY} 2 403`);
        makeSound("a");
    });
    document.getElementsByTagName("svg")[0].addEventListener("mouseleave", () => {
      gsap.to("#path1", {
        attr: { d: "M 2 2 Q 2 2 2 403" },
        duration: 3,
        ease: "elastic.out(1,0.1)",
      });
    });
    document.getElementsByTagName("svg")[1].addEventListener("mousemove", (e) => {
      console.log(e.offsetX, e.offsetY);
      document
        .querySelector("#path2")
        .setAttribute("d", `M 2 2 Q${e.offsetX},${e.offsetY} 2 403`);
        makeSound("b");
    });
    document.getElementsByTagName("svg")[1].addEventListener("mouseleave", () => {
      gsap.to("#path2", {
        attr: { d: "M 2 2 Q 2 2 2 403" },
        duration: 3,
        ease: "elastic.out(1,0.1)",
      });
    });
    document.getElementsByTagName("svg")[2].addEventListener("mousemove", (e) => {
      console.log(e.offsetX, e.offsetY);
      document
        .querySelector("#path3")
        .setAttribute("d", `M 2 2 Q${e.offsetX},${e.offsetY} 2 403`);
        makeSound("c");
    });
    document.getElementsByTagName("svg")[2].addEventListener("mouseleave", () => {
      gsap.to("#path3", {
        attr: { d: "M 2 2 Q 2 2 2 403" },
        duration: 3,
        ease: "elastic.out(1,0.1)",
      });
    });
    document.getElementsByTagName("svg")[3].addEventListener("mousemove", (e) => {
      console.log(e.offsetX, e.offsetY);
      document
        .querySelector("#path4")
        .setAttribute("d", `M 2 2 Q${e.offsetX},${e.offsetY} 2 403`);
        makeSound("d");
    });
    document.getElementsByTagName("svg")[3].addEventListener("mouseleave", () => {
      gsap.to("#path4", {
        attr: { d: "M 2 2 Q 2 2 2 403" },
        duration: 3,
        ease: "elastic.out(1,0.1)",
      });
    });
    document.getElementsByTagName("svg")[4].addEventListener("mousemove", (e) => {
      console.log(e.offsetX, e.offsetY);
      document
        .querySelector("#path5")
        .setAttribute("d", `M 2 2 Q${e.offsetX},${e.offsetY} 2 403`);
        makeSound("e");
    });
    document.getElementsByTagName("svg")[4].addEventListener("mouseleave", () => {
      gsap.to("#path5", {
        attr: { d: "M 2 2 Q 2 2 2 403" },
        duration: 3,
        ease: "elastic.out(1,0.1)",
      });
    });

    document.getElementsByTagName("svg")[5].addEventListener("mousemove", (e) => {
      console.log(e.offsetX, e.offsetY);
      document
        .querySelector("#path6")
        .setAttribute("d", `M 2 2 Q${e.offsetX},${e.offsetY} 2 403`);
        makeSound("f");
    });
    document.getElementsByTagName("svg")[5].addEventListener("mouseleave", () => {
      gsap.to("#path6", {
        attr: { d: "M 2 2 Q 2 2 2 403" },
        duration: 3,
        ease: "elastic.out(1,0.1)",
      });
    });
  };

//   var n = document.querySelectorAll("svg").length;
//   console.log(n);

//   for (var i = 1; i <= n; i++) {
//     document.querySelectorAll("svg")[i].addEventListener("mousedown", (e) => {
//       console.log(e.offsetX, e.offsetY);
//       document
//         .querySelector("#path" + i)
//         .setAttribute("d", `M 2 2 Q${e.offsetX},${e.offsetY} 2 403`);
//     });
//     document.querySelectorAll("svg")[i].addEventListener("mouseleave", () => {
//       gsap.to("#path" + i, {
//         attr: { d: "M 2 2 Q 2 2 2 403" },
//         duration: 3,
//         ease: "elastic.out(2,0.1)",
//       });
//     });
//   }

  //   const svg = document.querySelector("svg");
  //   const path1 = document.getElementById("path1");
  //   let isDragging = false;
  //   let offsetX, offsetY;

  //   path1.addEventListener("mousedown", (e) => {
  //     isDragging = true;
  //     const pt = svg.createSVGPoint();
  //     pt.x = e.clientX;
  //     pt.y = e.clientY;
  //     const cursorPoint = pt.matrixTransform(svg.getScreenCTM().inverse());
  //     offsetX = cursorPoint.x - 150; // initial x position of the path1
  //     offsetY = cursorPoint.y - 200; // initial control point y position of the path1
  // });

  // document.addEventListener("mousemove", (e) => {
  //     if (isDragging) {
  //         const pt = svg.createSVGPoint();
  //       pt.x = e.clientX;
  //       pt.y = e.clientY;
  //       const cursorPoint = pt.matrixTransform(svg.getScreenCTM().inverse());
  //       const newX = cursorPoint.x - offsetX;
  //       const newY = cursorPoint.y - offsetY;
  //       path1.setAttribute("d", `M 150 100 Q ${newX} ${newY} 150 300`);
  //       makeSound("f");
  //     }
  // });

  //   document.addEventListener("mouseup", () => {
  //     isDragging = false;
  //   });

  document.addEventListener("keydown", function (event) {
    makeSound(event.key);
  });
  function makeSound(sn) {
    if (sn == "a") {
      var tom1 = new Audio("GuitarChord-A_vbr_mp3/1st_String_E_vbr.mp3");
      tom1.play();

    } else if (sn == "b") {
      var tom2 = new Audio("GuitarChord-A_vbr_mp3/2nd_String_B__vbr.mp3");
      tom2.play();
    } else if (sn == "c") {
      var tom3 = new Audio("GuitarChord-A_vbr_mp3/3rd_String_G_vbr.mp3");
      tom3.play();
    } else if (sn == "d") {
      var tom4 = new Audio("GuitarChord-A_vbr_mp3/4th_String_D_vbr.mp3");
      tom4.play();
    } else if (sn == "e") {
      var kick = new Audio("GuitarChord-A_vbr_mp3/5th_String_A_vbr.mp3");
      kick.play();
    } else if (sn == "f") {
      var snare = new Audio("GuitarChord-A_vbr_mp3/Dm_vbr.mp3");
      snare.play();
    } else {
      console.log(sn);
    }
  }

