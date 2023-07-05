import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GameCardSkeleton() {
    return (
        <Card width="300px" borderRadius={10}>
            <Skeleton height={"200px"}></Skeleton>
            <CardBody>
                <SkeletonText></SkeletonText>
            </CardBody>
        </Card>
    );
}
