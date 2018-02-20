let txt;

// function  keyTyped() {
//   if (key == BACKSPACE || key == DELETE) {
//     if (input != null && input.length() > 0) {
//       input = input.substring(0, input.length() - 1);
//     }
//   } else{
//     input += key;
//   }
// }


function drawGenerativeText(txt, x, y) {
  if (input == null) return;

  stroke(0);
  noFill();

  push();

  translate(x, y);
  translate(0, -70);

  for (var i = 0; i < txt.length; i++) {
    c = input.charAt(i);

    drawGenerativevar(c);
  }

  pop();
}


function drawGenerativevar(c) {
  switch (c) {
    case 'a':
      draw_a();
      break;
    case 'b':
      draw_b();
      break;
    case 'c':
      draw_c();
      break;
    case 'd':
      draw_d();
      break;
    case 'e':
      draw_e();
      break;
    case 'f':
      draw_f();
      break;
    case 'g':
      draw_g();
      break;
    case 'h':
      draw_h();
      break;
    case 'i':
      draw_i();
      break;
    case 'j':
      draw_j();
      break;
    case 'k':
      draw_k();
      break;
    case 'l':
      draw_l();
      break;
    case 'm':
      draw_m();
      break;
    case 'n':
      draw_n();
      break;
    case 'o':
      draw_o();
      break;
    case 'p':
      draw_p();
      break;
    case 'q':
      draw_q();
      break;
    case 'r':
      draw_r();
      break;
    case 's':
      draw_s();
      break;
    case 't':
      draw_t();
      break;
    case 'u':
      draw_u();
      break;
    case 'v':
      draw_v();
      break;
    case 'w':
      draw_w();
      break;
    case 'x':
      draw_x();
      break;
    case 'y':
      draw_y();
      break;
    case 'z':
      draw_z();
      break;

    case '0':
      draw_0();
      break;
    case '1':
      draw_1();
      break;
    case '2':
      draw_2();
      break;
    case '3':
      draw_3();
      break;
    case '4':
      draw_4();
      break;
    case '5':
      draw_5();
      break;
    case '6':
      draw_6();
      break;
    case '7':
      draw_7();
      break;
    case '8':
      draw_8();
      break;
    case '9':
      draw_9();
      break;
  }
}
