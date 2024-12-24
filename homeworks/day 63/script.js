// first homework

      let user = {
         name: 'jemal',
         lastName:'bQQ',
         Age: 120202020000202,
         addres: 'vake'
      }
      


      // second homework
  

      let femaly={
            me:'sandro',
            mom:'tini',
            dad:'gio',
            sister:'nutsa',
            brother:'kostantine',
            myAge: 11,
            momAge: 33,
            dadAge: 35,
            SisterAge: 5,
            BrotherAge: 1,
            futer: [20,30,40]
      }


      
      let p =  Number(prompt(`hello ${femaly.me} and your famely i have an questen how much years do you want to travel in futer but we dont have many choises we only have ${femaly.futer[0]},${femaly.futer[1]} and ${femaly.futer[2]} so choose`))



      if (p===20){
         alert(`so you will be ${femaly.futer[0]+femaly.myAge} and your mom and dad will be ${femaly.futer[0]+femaly.momAge} and ${femaly.futer[0]+femaly.dadAge} and your siblings will be ${femaly.futer[0]+femaly.SisterAge} and ${femaly.futer[0]+femaly.BrotherAge}`)
      }

      if (p===30){
         alert(`so you will be ${femaly.futer[1]+femaly.myAge} and your mom and dad will be ${femaly.futer[1]+femaly.momAge} and ${femaly.futer[1]+femaly.dadAge} and your siblings will be ${femaly.futer[1]+femaly.SisterAge} and ${femaly.futer[1]+femaly.BrotherAge}`)
      }

      

      if (p===40){
         alert(`so you will be ${femaly.futer[2]+femaly.myAge} and your mom and dad will be ${femaly.futer[2]+femaly.momAge} and ${femaly.futer[2]+femaly.dadAge} and your siblings will be ${femaly.futer[2]+femaly.SisterAge} and ${femaly.futer[2]+femaly.BrotherAge}`)
      }

      else{
         alert('we dont have that number if time traval')
      }

      
      // third homework

      user.name = 'sandro'
      user.lastName = 'sidamonidze'
      user.Age = 11
      user.addres = 'saburtalo'
      console.log(user.name)