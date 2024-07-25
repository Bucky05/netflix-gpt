import { GoogleGenerativeAI} from '@google/generative-ai';
import { OPENAI_KEY } from './constants';
const openai = new GoogleGenerativeAI(OPENAI_KEY)

const model = openai.getGenerativeModel({model : 'gemini-1.5-flash'})


export default model