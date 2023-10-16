import React from "react";

type DescData = {
  image1: string;
  image2: string;
  productTitle1: string;
  productTitle2: string;
  description: string;
  boxContents: string;
};

interface pageProps {
  data: DescData;
}

const DescPreview = ({ data }: pageProps) => {
  const contents = data.boxContents.split(", ");
  return (
    <div>
      <header className="bg-blue-500 py-4 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            <a
              href="https://www.ebay.com/usr/potrika_deals"
              className="hover:text-yellow-500"
            >
              Visit Our EBAY store
            </a>
          </h1>
        </div>
      </header>
      <main className="container mx-auto mt-8 pb-10">
        <div className="flex flex-wrap">
          <div className="w-1/2">
            <img
              src={data.image1}
              alt="Product Image"
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/2 pl-4 py-5">
            <h2 className="text-3xl font-bold mb-2">{data.productTitle1}</h2>
            <p className="text-gray-600 text-sm">Condition: New</p>
          </div>
        </div>
        <hr className="my-8 border-t border-gray-300" />
        <section className="mt-4 mb-4">
          <h2 className="text-2xl font-semibold mb-4 bg-gray-200 px-3 py-1 rounded-lg">
            What's in the Box
          </h2>
          <ul className="list-disc px-10">
            {contents.map((content) => (
              <li>{content}</li>
            ))}
          </ul>
        </section>
        <hr className="my-8 border-t border-gray-300" />
        <section className="mt-8">
          <div className="flex flex-wrap">
            <div className="w-1/2">
              <img
                src={data.image2}
                alt="Product Image 2"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 pl-4">
              <h2 className="text-3xl font-bold mb-2 bg-blue-500 text-white px-3 py-1 rounded-md">
                {data.productTitle2}
              </h2>
              <p className="text-gray-600 text-sm pb-10">{data.description}</p>

              <table className="table-auto">
                <tbody className="py-5">
                  <tr>
                    <td className="px-4 py-2 bg-gray-200 border border-black">
                      Specification 1
                    </td>
                    <td className="px-4 py-2 border border-black">Value 1</td>
                    <td className="px-4 py-2 bg-gray-200 border border-black">
                      Specification 2
                    </td>
                    <td className="px-4 py-2 border border-black">Value 2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <hr className="my-8 border-t border-gray-300" />
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
          <p className="text-gray-600 text-sm">
            Provide shipping information and details about your shipping
            policies here.
          </p>
        </section>
      </main>
    </div>
  );
};

export default DescPreview;
