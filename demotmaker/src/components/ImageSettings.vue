<template>
  <div class="image-settings">
    <h1>{{ msg }}</h1>
    <div class="image__download-buttons">
      <button class="image__download" v-on:click="downloadImage()" v-if="showResult"><svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="48" height="48" viewBox="0 0 24 24"><path d="M16 11h5l-9 10-9-10h5v-11h8v11zm3 8v3h-14v-3h-2v5h18v-5h-2z"/></svg></button>
    </div>
    <canvas class="image__result" id="result" width="300" height="300" v-show="showResult"></canvas>
    <div class="file-upload">
      <label for="myfile"><svg xmlns="http://www.w3.org/2000/svg" fill="#fff" class="decal__to-left" width="24" height="24" viewBox="0 0 24 24"><path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z"/></svg>Wybierz Plik <svg xmlns="http://www.w3.org/2000/svg" class="decal__to-right" fill="#fff" width="24" height="24" viewBox="0 0 24 24" v-if="fileUploaded"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/></svg></label>
      <br>
      <input class="input__file" type="file" id="myfile" name="myfile" accept="image/*">
    </div>
    <input class="input__text" type="text" id="title" name="title" placeholder="Tytuł">
    <input class="input__text" type="text" id="description" name="description" placeholder="Opis">
    <button class="input__button" type="button" id="create" name="create" v-on:click="generateImage()">Stwórz</button>
  </div>
</template>

<script>
export default {
  name: 'ImageSettings',
  props: {
    msg: String
  },
  data() {
    return {
      fileUploaded: false,
      showResult: false,
      selectedImage: null
    }
  },
  mounted() {
    const fileInput = document.getElementById('myfile')

    fileInput.onchange = () => {
      const selectedFile = fileInput.files[0]
      if (selectedFile != undefined) {
        console.log(selectedFile)
        this.fileUploaded = true
        this.selectedImage = selectedFile
      } else {
        this.fileUploaded = false
        console.log(selectedFile)
      }
    }
  },
  methods: {
    generateImage() {
      let canvas = document.getElementById('result')
      let ctx = canvas.getContext('2d')
      const pathToLogo = 'logo.png'
      let logo = new Image()

      let title = document.getElementById('title').value
      let subtitle = document.getElementById('description').value

      const FR = new FileReader();
      FR.addEventListener("load", (evt) => {
        const img = new Image()

        img.addEventListener("load", () => {
          let mniejszaWartosc
          let aspekt

          aspekt = img.width / img.height

          let originalWidth = img.width

          if(img.width < 800) {
            img.width = 800
            img.height = 800 / aspekt
          }

          if(img.width < img.height) {
            mniejszaWartosc = img.width
          } else {
            mniejszaWartosc = img.height
          }

          let tLines = []
          let tResult = ""
          let width
          let i

          canvas.width = img.width + mniejszaWartosc / 6

          let fontSize = canvas.width / 16

          while ( title.length ) {
            for( i = title.length; ctx.measureText(title.substr(0,i)).width > canvas.width / (fontSize / 10); i-- );

            tResult = title.substr(0,i);

            let j

            if ( i !== title.length )
              for(j = 0; tResult.indexOf(" ", j) !== -1; j=tResult.indexOf(" ", j)+1 );

            tLines.push( tResult.substr(0, j || tResult.length) );
            width = Math.max( width, ctx.measureText(tLines[ tLines.length-1 ]).width );
            title = title.substr( tLines[ tLines.length-1 ].length, title.length );
          }

          console.log(tLines)

          let lines = []
          let result = ""

          while ( subtitle.length ) {
            for( i = subtitle.length; ctx.measureText(subtitle.substr(0,i)).width > canvas.width / (fontSize / 20); i-- );

            result = subtitle.substr(0,i);

            let j

            if ( i !== subtitle.length )
              for(j = 0; result.indexOf(" ", j) !== -1; j=result.indexOf(" ", j)+1 );

            lines.push( result.substr(0, j || result.length) );
            width = Math.max( width, ctx.measureText(lines[ lines.length-1 ]).width );
            subtitle  = subtitle.substr( lines[ lines.length-1 ].length, subtitle.length );
          }

          canvas.height = img.height + (fontSize * 2 + (tLines.length * fontSize)) + (fontSize * 2 + (lines.length * fontSize * 0.5))
          ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

          if(originalWidth < 800) {
            ctx.drawImage(img, 0 + mniejszaWartosc / 12, 0 + mniejszaWartosc / 12, 800, 800 / aspekt)
          } else {
            ctx.drawImage(img, 0 + mniejszaWartosc / 12, 0 + mniejszaWartosc / 12)
          }

          ctx.strokeStyle = "#fff"
          ctx.lineWidth = 7
          ctx.strokeRect(mniejszaWartosc / 12, mniejszaWartosc / 12, img.width, img.height)

          ctx.font = fontSize + "px Serif"
          ctx.textAlign = "center"
          ctx.fillStyle = "#fff"

          for(let y = 0; y < tLines.length; y++) {
            ctx.fillText(tLines[y], canvas.width / 2, img.height + fontSize * 2 + (y * fontSize) + fontSize / 2)
          }

          ctx.font = fontSize / 2 + "px Arial"
          ctx.textAlign = "center"
          ctx.fillStyle = "#fff"

          for(let y = 0; y < lines.length; y++) {
            ctx.fillText(lines[y], canvas.width / 2, img.height + fontSize * 2 + (y * fontSize * 0.5) + (tLines.length * fontSize) + fontSize / 2)
          }

          logo.onload = function() {
            ctx.drawImage(logo, canvas.width / 2 - canvas.width / 12, canvas.height - canvas.width / 36, canvas.width / 6, canvas.width / 36)
          }
          logo.src = pathToLogo
          this.showResult = true
        })
        img.src = evt.target.result
      });
      FR.readAsDataURL(this.selectedImage)


      fetch("/appMonitoring", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ action: "generate" }),
        })
          .then(function (response) {
            console.log(response.json())
          })
          .catch(function (error) {
            console.log(error)
      })
    },
    downloadImage() {
      var link = document.createElement('a')
      link.download = 'demotywator.png'
      link.href = document.getElementById('result').toDataURL()
      link.click()

      fetch("/appMonitoring", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ action: "download" }),
        })
          .then(function (response) {
            console.log(response.json())
          })
          .catch(function (error) {
            console.log(error)
      })
    }
  }
}
</script>

<style scoped lang="scss">
$color-dark: #011627;
$color-primary: #FF3366;
$color-secondary: #ff5983;
$color-light: #F6F7F8;

.image-settings {
  border: 0.125rem solid $color-secondary;
  margin: 0 1rem;
  border-radius: 2rem;
  box-shadow: inset 0 0 0.25rem $color-secondary;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  justify-content: center;

  input {
    font-family: 'Poppins', sans-serif;
  }

  button {
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
  }

  .image__download-buttons {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
  }

  .image__download {
    width: 8rem;
    height: 8rem;
    background-image: linear-gradient(30deg, $color-primary, $color-secondary);
    transition: 125ms;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.125rem solid;
    border-color: $color-primary;
    font-weight: bold;
    color: $color-light;
    text-decoration: none;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: $color-light 0 0 6rem;

    &:hover {
      box-shadow: $color-secondary 0 0 3rem;
    }
  }

  label[for="myfile"] {
    background-image: linear-gradient(30deg, $color-primary, $color-secondary);
    transition: 125ms;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: inherit;
    height: 3rem;
    border: 0.125rem solid;
    border-color: $color-primary;
    font-weight: bold;
    color: $color-light;
    text-decoration: none;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      opacity: 0.75;
      font-size: 0.95rem;
    }

    .decal__to-left {
      transform: translateX(-0.25rem);
    }

    .decal__to-right {
      transform: translateX(0.25rem);
    }
  }

  input[type="file"] {
    display: none;
  }

  .input__text {
    background-color: $color-dark;
    border: 0.125rem solid $color-secondary;
    border-radius: 2rem;
    color: $color-light;
    padding: 0 1rem;
    font-size: 1.5rem;
    height: 3rem;
  }

  .input__button {
    background-image: linear-gradient(30deg, $color-primary, $color-secondary);
    transition: 125ms;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: inherit;
    height: 3rem;
    border: 0.125rem solid;
    border-color: $color-primary;
    font-weight: bold;
    color: $color-light;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      opacity: 0.75;
      font-size: 0.95rem;
    }
  }
}

h1 {
  margin: 0 0;
}
</style>
