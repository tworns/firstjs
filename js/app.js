//$(document).foundation()

var buildColorDiv = function(color){
    return '<div style = "height: 100px; width: 100px; background-color: ' + color + '"></div>' ;
};

var buildList = function(listValues) {
  var dl = document.createElement('dl');
  dl.innerHTML +=
    '<dt>Name:</dt>'+
    '<dd>'+ listValues.name+ '</dd>'+
    '<dt>'+'Hair color: ' + listValues.haircolor+ '</dt>'+
    '<dd id = outColor>'+ listValues.colorDiv + '</dd>' +
    '<dt>'+"Age: "+ '</dt>' +
    '<dd>'+listValues.age +'</dd>'+
    '<dt>'+ "Birthplace:  "+ '</dt>'+
    '<dd>'+ listValues.birthplace+ '</dd>' +
  '</dl>';
  return dl;
};

  var addValuesToDetails = function(ev){
    ev.preventDefault();
      var details = document.querySelector('form');

      var colorDiv1 = buildColorDiv(this.hair_color.value);
      var values = {
            name : this.name.value, //this = e.currentTarget
            haircolor : this.hair_color.value,
            age : this.age.value,
            colorDiv: colorDiv1,
            birthplace : this.birthplace.value,
      };
    details.appendChild(buildList(values));


  };

      document.querySelector('form').onsubmit = addValuesToDetails; // function(e) {
