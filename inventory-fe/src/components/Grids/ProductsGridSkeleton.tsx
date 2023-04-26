type Props = {
  gridItemsCount: number;
};

export const ProductsGridSkeleton = ({ gridItemsCount }: Props) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {Array.from({ length: gridItemsCount }, (_, index) => index).map(
        (skeleton) => (
          <div key={skeleton} className="group relative">
            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none h-80">
              {/* Skeleton image */}
              <div className="h-full w-full animate-skeleton-loading bg-gray-300" />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                {/* Skeleton title */}
                <div className="h-4 w-[100px] mb-2 bg-gray-300 animate-skeleton-loading" />
                {/* Skeleton description */}
                <div className="h-3 mt-2 w-full bg-gray-300 animate-skeleton-loading" />
              </div>
              {/* Skeleton price */}
              <div className="h-4 w-12 bg-gray-300 animate-skeleton-loading" />
            </div>
          </div>
        )
      )}
    </div>
  );
};
