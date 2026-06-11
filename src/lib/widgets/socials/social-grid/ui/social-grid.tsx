import type { FC } from "react";
import { platforms } from "~shared/constants";
import { Card, CardHeader, CardTitle } from "~ui/card";

export const SocialGrid: FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl">
      {platforms.map((platform) => (
        <a key={platform.url.toString()} href={platform.url.toString()}>
          <Card>
            <CardHeader>
              <CardTitle>{platform.name}</CardTitle>
            </CardHeader>
          </Card>
        </a>
      ))}
    </div>
  );
};
