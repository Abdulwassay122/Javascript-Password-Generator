class password {
    constructor() {
      // console.log("Welcome to password generator")
      this.pass = ""
    }
    normalpassword(lenght) {
      let characters = "abcdefghijklmnopqrstuvwxyz"
      let numbers = "1234567890"
      let specialCharacters = "!@#$"
      if (lenght < 3) {
        console.log("your password should be atleast 3 characters long")
      }
      else {
        let i = 0
        while (i < lenght) {
          this.pass += characters[Math.floor(Math.random() * characters.length)]
          this.pass += numbers[Math.floor(Math.random() * numbers.length)]
          this.pass += specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
          i += 3
        }
        this.pass = this.pass.slice(0, lenght)
        return this.pass
      }
    }
    weakpassword(lenght) {
      let characters = "abcdefghijklmnopqrstuvwxyz"
      let numbers = "1234567890"
      if (lenght < 3) {
        console.log("your password should be atleast 3 characters long")
      }
      else {
        let i = 0
        while (i < lenght) {
          this.pass += characters[Math.floor(Math.random() * characters.length)]
          this.pass += numbers[Math.floor(Math.random() * numbers.length)]
          i += 2
        }
        this.pass = this.pass.slice(0, lenght)
        return this.pass
      }
    }
    strongepassword(lenght) {
      let smallCharacters = "abcdefghijklmnopqrstuvwxyz"
      let capitalCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      let numbers = "1234567890"
      let specialCharacters = "!@#$%^&*()"
      if (lenght < 3) {
        console.log("your password should be atleast 3 characters long")
      }
      else {
        let i = 0
        while (i < lenght) {
          this.pass += smallCharacters[Math.floor(Math.random() * smallCharacters.length)]
          this.pass += capitalCharacters[Math.floor(Math.random() * capitalCharacters.length)]
          this.pass += numbers[Math.floor(Math.random() * numbers.length)]
          this.pass += specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
          i += 3
        }
        this.pass = this.pass.slice(0, lenght)
        return this.pass
      }
    }
    verystrongepassword(lenght) {
      let smallCharacters = "abcdefghijklmnopqrstuvwxyz"
      let capitalCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      let numbers = "1234567890"
      let specialCharacters = "!@#$%^&*()-_=+[]{}|;:/?.,<>`~"
      if (lenght < 3) {
        console.log("your password should be atleast 3 characters long")
      }
      else {
        let i = 0
        while (i < lenght) {
          this.pass += smallCharacters[Math.floor(Math.random() * smallCharacters.length)]
          this.pass += capitalCharacters[Math.floor(Math.random() * capitalCharacters.length)]
          this.pass += numbers[Math.floor(Math.random() * numbers.length)]
          this.pass += specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
          i += 4
        }
        this.pass = this.pass.slice(0, lenght)
        return this.pass
      }
    }
  }
  
  
  
  btn1.addEventListener("click", func1)
  function func1() {
    let input = parseInt(document.getElementById("input").value)
    if (input < 3) {
      document.getElementById("text1").innerHTML = "Minimum length is 3"
  
    }
    else if (input > 20) {
      document.getElementById("text1").innerHTML = "Maximum length is 20"
  
    }
    else {
      let p = new password()
      document.getElementById("text1").innerHTML = p.weakpassword(input)
    }
  }
  btn2.addEventListener("click", func2)
  function func2() {
    let input = parseInt(document.getElementById("input").value)
    if (input < 3) {
      document.getElementById("text2").innerHTML = "Minimum length is 3"
  
    }
    else if (input > 20) {
      document.getElementById("text2").innerHTML = "Maximum length is 20"
  
    }
    else {
      let p = new password()
      document.getElementById("text2").innerHTML = p.normalpassword(input)
    }
  }
  btn3.addEventListener("click", func3)
  function func3() {
    let input = parseInt(document.getElementById("input").value)
    if (input < 3) {
      document.getElementById("text3").innerHTML = "Minimum length is 3"
  
    }
    else if (input > 20) {
      document.getElementById("text3").innerHTML = "Maximum length is 20"
  
    }
    else {
      let p = new password()
      document.getElementById("text3").innerHTML = p.strongepassword(input)
    }
  }
  btn4.addEventListener("click", func4)
  function func4() {
    let input = parseInt(document.getElementById("input").value)
    if (input < 3) {
      document.getElementById("text4").innerHTML = "Minimum length is 3"
  
    }
    else if (input > 20) {
      document.getElementById("text4").innerHTML = "Maximum length is 20"
  
    }
    else {
      let p = new password()
      document.getElementById("text4").innerHTML = p.verystrongepassword(input)
    }
  }
  
  
  
  
  