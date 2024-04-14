import frontmatter
import os

def generate_table_rows(talks_directory):
    rows = []
    for filename in os.listdir(talks_directory):
        if filename.endswith(".md") and not filename.startswith("_"):
            with open(os.path.join(talks_directory, filename), 'r') as f:
                post = frontmatter.load(f)
                title = post.metadata.get('title', 'No Title')
                year = post.metadata.get('year', '')
                labels = post.metadata.get('labels', '')
                rows.append(f'<tr data-labels="{labels}"><td><a href="https://github.com/angelicagardner/tech-talks-digest/blob/main/talks/{filename}">{title}</a></td><td>{labels}</td></tr>')
    return '\n'.join(rows)

def update_html_with_table_rows(table_rows):
    html_file_path = 'index.html'
    with open(html_file_path, 'r', encoding='utf-8') as file:
        html_content = file.read()
    
    new_html_content = html_content.replace('<!-- TABLE_ROWS_PLACEHOLDER -->', table_rows)
    with open(html_file_path, 'w', encoding='utf-8') as file:
        file.write(new_html_content)

if __name__ == "__main__":
    table_rows = generate_table_rows('./talks')
    update_html_with_table_rows(table_rows)
