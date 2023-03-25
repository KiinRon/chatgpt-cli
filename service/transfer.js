const axios = require("axios")
class Transfer {
    async transfer() {
        const res = await axios.post('https://api.openai.com/v1/chat/completions',{
            headers: {
                Authorization: 'Bearer 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'
            },
            data: {
                "model": "gpt-3.5-turbo",
                "messages": [{"role": "user", "content": "Hello!"}]
            }
        });
        console.log(res)
    }
}

new Transfer().transfer()