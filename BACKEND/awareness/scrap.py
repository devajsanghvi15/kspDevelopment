import json
import time
from urllib.parse import urljoin
from bs4 import BeautifulSoup
from requests_html import HTMLSession
from Summarize import Generate_summary

def scrap():
    # Create an HTML session
    session = HTMLSession()

    url = "https://economictimes.indiatimes.com/topic/awareness-on-road-safety"
    response = session.get(url)
    response.html.render(timeout=30)
    time.sleep(5)

    soup = BeautifulSoup(response.html.html, 'html.parser')

    articles = soup.find_all('div', class_='clr flt topicstry story_list')
    article_list = []

    for article in articles:
        title_element = article.find('h2')
        date_element = article.select_one('time')
        img_element = article.select_one('img.flt')  

        if title_element is None:
            continue  

        a_element = article.find('a')

        title_text = title_element.text.strip() if title_element else 'No Title'
        date_text = date_element.text.strip() if date_element else 'No Date'

        if a_element:
            href = a_element['href']

            # Check if href is a complete URL or needs to be joined
            if not href.startswith(('http://', 'https://')):
                href = urljoin("https://economictimes.indiatimes.com", href)

            # Extract description and date directly from the div
            description_element = article.find('p', class_='wrapLines l3')
            description_text = description_element.text.strip() if description_element else 'No Description'

            # Extracting the image URL
            img_url = img_element['src'] if img_element else 'No Image'

            # Create a dictionary for each article
            article_info = {
                'Title': title_text,
                'Date': date_text,
                'Description': description_text,
                'Link': href,
                'Image': img_url  # Add the image URL to the dictionary
            }

            # Append the dictionary to the list
            article_list.append(article_info)

    return article_list

def main():
    # Scrape articles
    article_list = scrap()

    # Generate summaries for each article
    for article in article_list:
        # Check if 'Description' key exists in the dictionary
        if 'Description' in article:
            original_description = article['Description']
            summary = Generate_summary(original_description)
            article['Description'] = summary

    # Save the updated JSON data
    with open("articles_summarised2.json", "w") as f:
        json.dump(article_list, f, indent=2)
    print("SUCCESS")

if __name__ == "__main__":
    main()
