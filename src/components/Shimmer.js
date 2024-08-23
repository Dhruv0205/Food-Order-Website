import React from "react";
import { Card, Skeleton } from "@nextui-org/react";
import './Shimmer.css'; // Ensure you import the CSS file

const Shimmer = () => {
  return (
    <div>
      <Card className="w-[300px] h-[300px] space-y-5 p-4" radius="lg">
        <Skeleton className="rounded-lg shimmer">
          <div className="h-24 rounded-lg"></div>
        </Skeleton>
        <div className="space-y-3">
          <Skeleton className="w-3/5 rounded-lg shimmer">
            <div className="h-3 w-full rounded-lg"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg shimmer">
            <div className="h-3 w-full rounded-lg"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg shimmer">
            <div className="h-3 w-full rounded-lg"></div>
          </Skeleton>
        </div>
      </Card>
    </div>
  );
};

export default Shimmer;
