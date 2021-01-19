<template>
  <div>
    Scraping!
    <!-- <iframe
      src="http://de-signing.com/mail/"
      width="100%"
      height="100%"
    ></iframe> -->
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const axios = await context.$axios
    const config = {
      method: 'get',
      url: 'mail',
      baseURL: 'http://de-signing.com/',
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
        'Access-Control-Allow-Origin': 'http://de-signing.com/',
      },
      responseType: 'document',
      responseEncoding: 'utf8',
    }
    // const headers = {
    //   'Content-Type': 'text/html; charset=UTF-8',
    //   'Access-Control-Allow-Origin': 'http://de-signing.com/',
    // }
    // const target = 'http://de-signing.com/mail/'
    const xmlString = await axios(config)
    return { html: xmlString.data }
    // console.log(res.data)
    // await console.log(res.data.body.childNodes)
    // await context.$axios
    //   .get('http://de-signing.com/mail/', { headers })
    //   .then((res) => {
    //     console.log(res)
    //   })
    //   .catch((error) => {
    //     if (context.$axios.isCancel(error)) {
    //       console.log('Request canceled', error)
    //     } else {
    //       console.log(error)
    //     }
    //   })
  },
}
</script>
