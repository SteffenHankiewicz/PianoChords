// Custom Scripts for piano rendering //

var myChords;

(function() {
  myChords = [];
  // myChords = JSON.parse(sessionStorage.getItem("chords"));
  // if (myChords==null){
  //   myChords = [];
  // }
  renderContent();
})();


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// TESTS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function testfunction() {
  let c = new Chord ("c", [ 'c1', 'c2', 'c3' ]);
  c.invert();
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function to add a new chord to the list
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function addChord(name) {
  myChords.push(receiveChord(name));
  renderContent();
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function to remove a chord from the list
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function removeChord(index) {
  myChords.splice(index, 1);
  renderContent();
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function to remove a chord from the list
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function invertChord(index) {
  var c = myChords[index];
  c.invert();
  renderContent();
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function to reset the list
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function resetChordList() {
  myChords = [];
  renderContent();
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// get Class from all available ones
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function receiveChord(name) {
  switch (name) {
    case "C":
      return new Chord ("C", [ 'c', 'c_e', 'c_g' ]);
    case "Cm":
      return new Chord ("Cm", [ 'cm', 'cm_e_flat', 'cm_g' ]);
    case "C7":
      return new Chord ("C7", [ 'c7', 'c7_e', 'c7_g', 'c7_b_flat' ]);
    case "Cm7":
      return new Chord ("Cm7", [ 'cm7', 'cm7_e_flat', 'cm7_g', 'cm7_b_flat' ]);
    
    case "C#":
      return new Chord ("C#", [ 'd_flat', 'd_flat_f', 'd_flat_a_flat' ]);
    case "C#m":
      return new Chord ("C#m", [ 'd_flat_m', 'd_flat_m_e', 'd_flat_m_a_flat' ]);

    case "D":
      return new Chord ("D", [ 'd', 'd_f_sharp', 'd_a' ]);
    case "Dm":
      return new Chord ("Dm", [ 'dm', 'dm_f', 'dm_a' ]);
    case "D7":
      return new Chord ("D7", [ 'd7', 'd7_f_sharp', 'd7_a', 'd7_c' ]);
    case "Dm7":
      return new Chord ("Dm7", [ 'dm7', 'dm7_f', 'dm7_a', 'dm7_c' ]);
    case "Dsus4":
      return new Chord ("Dsus4", [ 'dsus4' ]);
    case "Dsus2":
      return new Chord ("Dsus2", [ 'dsus2' ]);
    case "D7sus4":
      return new Chord ("D7sus4", [ 'd7sus4' ]);
    
    case "E":
      return new Chord ("E", [ 'e', 'e_g_sharp', 'e_b' ]);
    case "Em":
      return new Chord ("Em", [ 'em', 'em_g', 'em_b' ]);
    case "E7":
      return new Chord ("E7", [ 'e7', 'e7_g_sharp', 'e7_b', 'e7_d' ]);
    case "Em7":
      return new Chord ("Em7", [ 'em7', 'em7_g', 'em7_b', 'em7_d' ]);
    
    case "F":
      return new Chord ("F", [ 'f', 'f_a', 'f_c' ]);
    case "Fm":
      return new Chord ("Fm", [ 'fm', 'fm_a_flat', 'fm_c' ]);
    case "F7":
      return new Chord ("F7", [ 'f7', 'f7_a', 'f7_c', 'f7_e_flat' ]);
    case "Fm7":
      return new Chord ("Fm7", [ 'fm7', 'fm7_a_flat', 'fm7_c', 'fm7_e_flat' ]);
      
    case "F#":
      return new Chord ("F#", [ 'g_flat', 'g_flat_b_flat', 'g_flat_d_flat' ]);
    case "F#m":
      return new Chord ("F#m", [ 'g_flat_m', 'g_flat_m_a', 'g_flat_m_d_flat' ]);
    case "F#7":
      return new Chord ("F#7", [ 'g_flat_7', 'g_flat_7_b_flat', 'g_flat_7_d_flat', 'g_flat_7_e' ]);
    case "F#m7":
      return new Chord ("F#m7", [ 'g_flat_m7', 'g_flat_m7_a', 'g_flat_m7_d_flat', 'g_flat_m7_e' ]);
    
    case "G":
      return new Chord ("G", [ 'g', 'g_b', 'g_d' ]);
    case "Gm":
      return new Chord ("Gm", [ 'gm', 'gm_b_flat', 'gm_d' ]);
    case "G7":
      return new Chord ("G7", [ 'g7', 'g7_b', 'g7_d', 'g7_f' ]);
    case "Gm7":
      return new Chord ("Gm7", [ 'gm7', 'gm7_b_flat', 'gm7_d', 'gm7_f' ]);
    
    case "A":
      return new Chord ("A", [ 'a', 'a_c_sharp', 'a_e' ]);
    case "Am":
      return new Chord ("Am", [ 'am', 'am_c', 'am_e' ]);
    case "A7":
      return new Chord ("A7", [ 'a7', 'a7_c_sharp', 'a7_e', 'a7_g' ]);
    case "Am7":
      return new Chord ("Am7", [ 'am7', 'am7_c', 'am7_e', 'am7_g' ]);
    case "A7sus4":
      return new Chord ("A7sus4", [ 'a7sus4' ]);
    
    case "A#":
      return new Chord ("A#", [ 'b_flat', 'b_flat_d', 'b_flat_f' ]);
    case "A#m":
      return new Chord ("A#m", [ 'b_flat_m', 'b_flat_m_d_flat', 'b_flat_m_f' ]);
    case "A#7":
      return new Chord ("A#7", [ 'b_flat_7', 'b_flat_7_d', 'b_flat_7_f', 'b_flat_7_a_flat' ]);
    case "A#m7":
      return new Chord ("A#m7", [ 'b_flat_m7', 'b_flat_m7_d_flat', 'b_flat_m7_f', 'b_flat_m7_a_flat' ]);

    case "Bb":
      return new Chord ("Bb", [ 'b_flat', 'b_flat_d', 'b_flat_f' ]);
    case "Bbm":
      return new Chord ("Bbm", [ 'b_flat_m', 'b_flat_m_d_flat', 'b_flat_m_f' ]);
    case "Bb7":
      return new Chord ("Bb7", [ 'b_flat_7', 'b_flat_7_d', 'b_flat_7_f', 'b_flat_7_a_flat' ]);
    case "Bbm7":
      return new Chord ("Bbm7", [ 'b_flat_m7', 'b_flat_m7_d_flat', 'b_flat_m7_f', 'b_flat_m7_a_flat' ]);
    case "B7sus4":
      return new Chord ("B7sus4", [ 'b7sus4' ]);

    case "B":
      return new Chord ("B", [ 'b', 'b_d_sharp', 'b_f_sharp' ]);
    case "Bm":
      return new Chord ("Bm", [ 'bm', 'bm_d', 'bm_f_sharp' ]);
    case "B7":
      return new Chord ("B7", [ 'b7', 'b7_d_sharp', 'b7_f_sharp', 'b7_a' ]);
    case "Bm7":
      return new Chord ("Bm7", [ 'bm7', 'bm7_d', 'bm7_g_flat', 'bm7_a' ]);
    
    case "":
      return new Chord ("", [ '', '', '' ]);
    case "":
      return new Chord ("", [ '', '', '' ]);
    case "":
      return new Chord ("", [ '', '', '', '' ]);
    case "":
      return new Chord ("", [ '', '', '', '' ]);
    
    case "":
      return new Chord ("", [ '', '', '', '' ]);
    case "":
      return new Chord ("", [ '', '', '', '' ]);
    case "":
      return new Chord ("", [ '', '', '', '' ]);
    case "":
      return new Chord ("", [ '', '', '', '' ]);
    case "":
      return new Chord ("", [ '', '', '', '' ]);
    case "":
      return new Chord ("", [ '', '', '', '' ]);









    
    default:
      console.error("the chord to receive is unknown: " + name);
      return null;
  }
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Simple Chord Class
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
class Chord {

  // constructor
  constructor(label, inversions) {
    this.label = label;
    this.inversions = inversions;
    this.current = this.inversions[0];
  }
  
  // invert the chord
  invert() {
    for (let i in this.inversions) {
      var x = Number(i)
      var temp = this.inversions[x];
      if (temp == this.current){
        if (this.inversions.length > (x+1)){
          this.current = this.inversions[x+1];
          return;
        }
      }
    }
    this.current = this.inversions[0];
  }
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function to render the current status
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function renderContent(){
  var content = "";

  // if the list is empty don't show anything
  if (myChords == null || myChords.length == 0){
    content = '<p class="nochords">Currently you did not add any chord to display here.</p>';
  } else {
    var i = 0;
    // if the list contains objects render these
    myChords.forEach(function(chord) {
      content += '<div id="chord1" class="flex-inner align-center">';
      content += '  <div class="f-image wow">';
      content += '    <img id="image1" class="img-fluid" src="assets/chords/' + chord.current + '.png">';
      content += '  </div>';
      content += '  <div class="f-text">';
      content += '    <div class="left-content">';
      content += '      <h3 style="margin-bottom:15px;">' + chord.label + '</h3>';
      //content += '      <p>' + i + ' - ' + chord.current + '</p>';
      //content += '      <p id="inversions">' + chord.inversions + '</p>';
      content += '      <button id="btnInvert1" class="btn-action-light" onclick="invertChord(' + i + ')">invert</button>';
      content += '      <button id="btnRemove1" class="btn-action-light" onclick="removeChord(' + i + ')">remove</button>';
      content += '     </div>';
      content += '  </div>';
      content += '</div>';
      i++;
    });
  }
  document.getElementById("chordlist").innerHTML = content;
}