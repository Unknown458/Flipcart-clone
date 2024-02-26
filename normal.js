document.querySelector('.dropdownlogo').addEventListener('mouseover', function() {
    this.classList.add('active');
    document.getElementById('button').style.color = '#fff';
    document.getElementById('button').style.backgroundColor = '#2A55E5';
  });
  
  document.querySelector('.dropdownlogo').addEventListener('mouseout', function() {
    this.classList.remove('active');
    document.getElementById('button').style.color = '';
    document.getElementById('button').style.backgroundColor = '';
  });




  





  




