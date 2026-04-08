/**
 * Introduction
Time of flight mass spectrometry is a useful method of analysing the mass of a substance. One of its uses and the one this kata will focus on is to find the relative abundances and m/z values of isotopes of an element in a sample. Henceforth the relative atomic mass may be calculated.

Note: If you already know about atomic mass, isotopes, relative abundances and relative atomic mass you can skip those sections.

And if you already know about time of flight mass spectrometry you can skip the section on that, but please read the section about the catch.

Basic Atomic Structure
Atomic Mass
Isotopes
Relative Abundances
Relative Atomic Mass
Time of Flight Mass Spectrometry
Time of Flight Mass Spectrometry
The Catch: Electron Impact
The Kata
Your function calculateRAM will be given the following parameters in order:

The kinetic energy (E) that the electric field accelerates all 1+ ions to, in aJ (10-18J)
The length (d) of the flight tube, in mm (10-3m)
An array of two-tuples (D), the first in each tuple representing the magnitude of the current (I) detected by the detector, in µA (10-6A), and the second in each tuple repesenting the time (t) that the current was detected after, in ns (10-9s)
and you must return the relative atomic mass of the sample given. Your answer will be tested to ±0.01, as is standard in the periodic table.

E
,
d
,
I
,
t
∈
N
50
≤
E
≤
1
0
3
50
≤
d
≤
1
0
3
1
≤
I
≤
1
0
4
50
≤
t
≤
1
0
5
2
≤
∣
D
∣
≤
8
E,d,I,t∈N
50≤E≤10 
3
 
50≤d≤10 
3
 
1≤I≤10 
4
 
50≤t≤10 
5
 
2≤∣D∣≤8
If an entry where the m/z is half the expected value exists, an entry with the whole value definitely exists, since a 2+ charge is quite unlikely to happen.

Each isotope/ion that is detected may have an equivalent halved m/z value associated with it. There is not necessarily only one of these.

Remember that the atomic mass of any isotope/ion should be a whole number. The calculations you perform may yield slightly inaccurate results because of the accuracy of the measurements taken by the spectrometer, but you should know to round these values.

Furthermore, even when the m/z values are halved, since the atomic mass is a whole number, the m/z values will always be a multiple of 0.5.

For small species (atomic mass <= 15), they will only exist in their two most common isotopes (as they would in nature). However, for larger species (atomic mass >= 16), their isotopes may range by ±4 atomic mass (which although is unnatural, makes it simpler to generate tests rather than storing a list of natural isotopes).

Helpful Equations
K
E
=
1
2
m
v
2
KE= 
2
1
​
 mv 
2
 
v
=
d
t
v= 
t
d
​
 
m
=
A
r
N
A
m= 
N 
A
​
 
A 
r
​
 
​
 
where Ar = [relative] atomic mass

and NA = number of things in one mole ; 6.022 * 1023 for this kata

furthermore note that the mass in the first equation is measured in kilograms (kg) but the mass in the third equation is measured in grams (g)
 */

function calculateRAM(KE, d, detector) {
  const mzMap = new Map();

  for (const [I, t] of detector) {
    let mz = (12.044 * KE * Math.pow(t, 2)) / (10000 * Math.pow(d, 2));

    mz = Math.round(mz * 2) / 2;

    mzMap.set(mz, (mzMap.get(mz) || 0) + I);
  }

  const sortedMasses = Array.from(mzMap.keys()).sort((a, b) => a - b);

  for (const mz of sortedMasses) {
    if (mz === 1) continue;

    if (mzMap.has(mz * 2)) {
      mzMap.set(mz * 2, mzMap.get(mz * 2) + mzMap.get(mz));
      mzMap.delete(mz); 
    }
  }

  let totalCurrent = 0;
  let weightedMass = 0;

  for (const [mz, I] of mzMap.entries()) {
    totalCurrent += I;
    weightedMass += mz * I;
  }

  return weightedMass / totalCurrent;
}