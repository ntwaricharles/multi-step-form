module.exports = {
  content: [
    "./src/**/*.{html,ts}", 
  ],
  theme: {
    extend: {
      colors: {
        'marine-blue': 'hsl(213, 96%, 18%)',
        'purplish-blue': 'hsl(243, 100%, 62%)',
        'pastel-blue': 'hsl(228, 100%, 84%)',
        'light-blue': 'hsl(206, 94%, 87%)',
        'strawberry-red': 'hsl(354, 84%, 57%)',
        'cool-gray': 'hsl(231, 11%, 63%)',
        'light-gray': 'hsl(229, 24%, 87%)',
        'magnolia': 'hsl(217, 100%, 97%)',
        'alabaster': 'hsl(231, 100%, 99%)',
        'white': 'hsl(0, 0%, 100%)',
      },
      fontFamily:{

      },
      borderWidth: {
        '1.5': '1.5px',
      },
      borderRadius: {
        'lg': '10px',
      },
      spacing: {
        '4': '15px',
        '3': '3px',
        '20': '20px',
        '1': '1px',
      },
      fontSize: {
        'lg': '18px',
        'sm': '14px',
      }
    },
  },
  plugins: [],
}
