import fly from 'flyio'
 

export default class LanZouCloud {
  FAILED = -1
  SUCCESS = 0
  ID_ERROR = 1
  PASSWORD_ERROR = 2
  LACK_PASSWORD = 3
  ZIP_ERROR = 4
  MKDIR_ERROR = 5
  URL_INVALID = 6
  FILE_CANCELLED = 7
  PATH_ERROR = 8
  NETWORK_ERROR = 9

  Timeout = 5000
  Max_size = 100
  Host_url = 'https://up.woozooo.com'
  Doupload_url = 'https://pc.woozooo.com/doupload.php'
  Test_url = 'https://up.woozooo.com/account.php'
  Account_url = 'https://pc.woozooo.com/account.php'
  Mydisk_url = 'https://pc.woozooo.com/mydisk.php'
  Cookies = ''
  Headers: object = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
    Referer: 'https://www.lanzous.com',
    'Accept-Language': 'zh-CN,zh;q=0.9'
  }

  get (url: string, kwargs?: object) {
    return new Promise((resolve, reject) => {
      fly.get(url, kwargs, {
        timeout: this.Timeout,
        headers: this.Headers
      }).then(res => {
        console.log(res)
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

  post () {
    console.log(this.Timeout)
  }

  login (username: string, password: string) {
    // const phoneHeader = { 'User-Agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/82.0.4051.0 Mobile Safari/537.36' }
    const loginData = {
      action: 'login',
      task: 'login',
      setSessionId: '',
      setToken: '',
      setSig: '',
      setScene: '',
      username: username,
      password: password
    }

    fly.request(this.Test_url, {
      action: 'login',
      task: 'login',
      setSessionId: '',
      setToken: '',
      setSig: '',
      setScene: '',
      formhash: '5dc76a08',
      username: username,
      password: password
    }, {
      method: 'post',
      timeout: 5000,
      headers: {
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8'
      }
    }).then(res => {
      console.log(res, 'login post')
    })

    // fly.post(this.Test_url, loginData, {
    //   timeout: this.Timeout,
    //   headers: {
    //     Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    //     'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8'
    //   }
    // }).then(res => {
    //   console.log(res, 'login get')
    // })
  }
}
