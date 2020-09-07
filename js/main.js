let body = document.getElementsByTagName('body')[0];

function changeTheme(){
  if (body.className !== 'dark'){
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
}