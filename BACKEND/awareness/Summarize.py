import json
import google.generativeai as palm


palm.configure(api_key="AIzaSyBne_4LKgsz-hKMMHyd42vBqo583N9EZtI")

models = [model for model in palm.list_models() if 'generateText' in model.supported_generation_methods]

model_bison = models[0]

def Generate_summary(text):
  prompt = f"""
  Your task is to act as a Text Summarizer.
  I will give you text.
  Your task is to create summary for the text in 150 words.
  Stretch the summary and remove "**" etc.
  text is shared below, delimited with triple backticks.
  ```
  {text}
  ```
  """
  response = palm.generate_text(
      model=model_bison,
      prompt = prompt,
      temperature = 0.2,
  )
  return  response.result
