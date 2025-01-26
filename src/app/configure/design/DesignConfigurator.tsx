interface DesignConfiguratorProps {
  configId: string;
  imageUrl: string;
  imageDimensions: { width: number; height: number };
}

const DesignConfigurator = ({
  configId,
  imageUrl,
  imageDimensions,
}: DesignConfiguratorProps) => {
  return (
    <div>
      <p>{configId}</p>
      <p>{imageUrl}</p>
    </div>
  );
};

export default DesignConfigurator;
