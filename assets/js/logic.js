

var config = {
    apiKey: "AIzaSyCfp937WrHinQ_H1tf0PBM3-la8duQmsUQ",
    authDomain: "test-project-59866.firebaseapp.com",
    databaseURL: "https://test-project-59866.firebaseio.com",
    projectId: "test-project-59866",
    storageBucket: "test-project-59866.appspot.com",
    messagingSenderId: "766361558341"
  };
  
  firebase.initializeApp(config);
  const database = firebase.database().ref('employees');

  function Employee(name,role,start,rate){ //employee constructor
  	this.name=name;
  	this.role=role;
  	this.start=start;
  	this.rate=rate;
  }

  $('#main-form').on('submit', function(event){
  	console.log('fired');
  	event.preventDefault();
    
    newEmployee = new Employee(
        $('#employee-name').val(),
        $('#employee-role').val(),
        $('#start-date').val(),
        $('#rate').val(),
    	);
    database.push(newEmployee);
  });

