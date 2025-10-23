import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";

// Initialize Azure Storage client
const getBlobServiceClient = (): BlobServiceClient => {
  const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;

  if (!connectionString) {
    throw new Error("AZURE_STORAGE_CONNECTION_STRING environment variable is not set");
  }

  return BlobServiceClient.fromConnectionString(connectionString);
};

// Get container client
const getContainerClient = (): ContainerClient => {
  const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME || "afrofeast-files";
  const blobServiceClient = getBlobServiceClient();
  return blobServiceClient.getContainerClient(containerName);
};

// Upload file to Azure Storage
export const uploadFile = async (
  file: File,
  fileName?: string,
): Promise<{ url: string; fileName: string }> => {
  try {
    const containerClient = getContainerClient();

    // Ensure container exists
    await containerClient.createIfNotExists({
      access: "blob", // Allow public read access
    });

    // Generate unique filename if not provided
    const finalFileName = fileName || `${Date.now()}-${file.name}`;

    // Get block blob client
    const blockBlobClient = containerClient.getBlockBlobClient(finalFileName);

    // Upload file
    const uploadResponse = await blockBlobClient.uploadData(file, {
      blobHTTPHeaders: {
        blobContentType: file.type,
      },
    });

    if (!uploadResponse.requestId) {
      throw new Error("Upload failed");
    }

    // Return the public URL
    const url = blockBlobClient.url;

    return {
      url,
      fileName: finalFileName,
    };
  } catch (error) {
    console.error("Error uploading file to Azure Storage:", error);
    throw new Error("Failed to upload file");
  }
};

// Delete file from Azure Storage
export const deleteFile = async (fileName: string): Promise<void> => {
  try {
    const containerClient = getContainerClient();
    const blockBlobClient = containerClient.getBlockBlobClient(fileName);

    await blockBlobClient.deleteIfExists();
  } catch (error) {
    console.error("Error deleting file from Azure Storage:", error);
    throw new Error("Failed to delete file");
  }
};

// List files in container
export const listFiles = async (): Promise<string[]> => {
  try {
    const containerClient = getContainerClient();
    const files: string[] = [];

    for await (const blob of containerClient.listBlobsFlat()) {
      files.push(blob.name);
    }

    return files;
  } catch (error) {
    console.error("Error listing files from Azure Storage:", error);
    throw new Error("Failed to list files");
  }
};

// Get file URL
export const getFileUrl = (fileName: string): string => {
  const containerClient = getContainerClient();
  const blockBlobClient = containerClient.getBlockBlobClient(fileName);
  return blockBlobClient.url;
};
