import pandas as pd

def load_data(file_path):
     
    df = pd.read_csv(file_path, delimiter=';')
    print("Columns in the DataFrame:", df.columns) 
    print(df.head()) 
    return df

def prepare_data(df):
    expected_columns ="age";"job";"marital";"education";"default";"balance";"housing";"loan";"contact";"day";"month";"duration";"campaign";"pdays";"previous";"poutcome";"y"
    missing_columns = [col for col in expected_columns if col not in df.columns]
    
    if missing_columns:
        print(f"Warning: The following columns are missing from the DataFrame: {missing_columns}")
    else:
        df = df.dropna(subset=expected_columns)
    
    df = pd.get_dummies(df, drop_first=True)
    return df

if __name__ == "__main__":
    file_path = r'C:\Users\jude4\OneDrive\Desktop\DI DIPLOMA PROJECT\Hackathon 2\bank-full.csv'
    df = load_data(file_path)
    df = prepare_data(df)
    df.to_csv('prepared_data.csv', index=False)
    print("Data loaded and prepared. Saved to 'prepared_data.csv'")

def load_data(file_path):
     
    df = pd.read_csv(file_path, delimiter=';')
    print("Columns in the DataFrame:", df.columns) 
    print(df.head()) 
    return df
