var x11 >= 0;
var x12 >= 0;
var x13 >= 0;
var x14 >= 0;
var x21 >= 0;
var x22 >= 0;
var x23 >= 0;
var x24 >= 0;
var x31 >= 0;
var x32 >= 0;
var x33 >= 0;
var x34 >= 0;

maximize z:
  90*x11 + 80*x12 + 10*x13 + 50*x14 +
  60*x21 + 70*x22 + 50*x23 + 65*x24 +
  70*x31 + 40*x32 + 75*x33 + 85*x34;

s.t. M1: x11 + x12 + x13 + x14 <= 80;
s.t. M2: x21 + x22 + x23 + x24 <= 80;
s.t. M3: x31 + x32 + x33 + x34 <= 80;
s.t. M4: x11 + x21 + x31 >= 70;
s.t. M5: x12 + x22 + x32 >= 50;
s.t. M6: x13 + x23 + x33 >= 85;
s.t. M7: x14 + x24 + x34 >= 35;