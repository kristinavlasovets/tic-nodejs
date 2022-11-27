import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {StreamChat} from 'stream-chat';
import {v4 as uuidv4} from 'uuid';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
const api_key = 'yzj9x3mf6vkv';
const api_secret =
	'xwa3e2xpzf9kt7jppzf743r4wrahzhyz8h8p4yhgnjd2t76ypystad24msb6a2cg';
const serverClient = new StreamChat.getInstance(api_key, api_secret);

app.post('/signin', (req, res) => {
	try {
		const {username} = req.body;
		const userId = uuidv4();
		const token = serverClient.createToken(userId);
		res.json({username, userId, token});
	} catch (e) {
		res.json(e);
	}
});
app.listen(process.env.PORT || 3001, () => {
	console.log('server is running on port 3001');
});
