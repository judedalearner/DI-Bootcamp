import pandas as pd
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

def perform_clustering(df, n_clusters):
    # Apply K-Means Clustering
    kmeans = KMeans(n_clusters=n_clusters, random_state=42)
    df['cluster'] = kmeans.fit_predict(df)
    
    # Analyze cluster centers
    cluster_centers = pd.DataFrame(kmeans.cluster_centers_, columns=df.columns[:-1])
    print(cluster_centers)
    
    return df, cluster_centers

def plot_clusters(df):
    plt.scatter(df['balance'], df['duration'], c=df['cluster'])
    plt.xlabel('Balance')
    plt.ylabel('Duration')
    plt.title('Customer Segments')
    plt.show()

if __name__ == "__main__":
    df = pd.read_csv('preprocessed_data.csv')
    print("Data loaded successfully.")

    df, cluster_centers = perform_clustering(df, n_clusters=4)
    print("clustering completed")

    plot_clusters(df)

    df.to_csv('segmented_customers.csv', index=False)
    print("Segmented customers saved to 'segmented_customers.csv'.")
     