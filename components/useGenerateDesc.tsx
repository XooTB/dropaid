type hookProps = {
  image1: string;
  image2: string;
  description: string;
  boxItems: string;
  titles: string[];
};

const useGenerateDesc = (data: hookProps) => {
  const { image1, image2, description, titles, boxItems } = data;

  const contents = boxItems.split(", ").map((item) => {
    return `<li>${item}</li>`;
  });

  console.log(contents);

  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
        body{margin:0;padding:0;font-family:Arial,sans-serif}.container{max-width:100%;padding:0 1rem;margin:0 auto}.mt-8,.my-8{margin-top:2rem}.bg-blue-500{background-color:#4299e1}.py-4{padding-top:1rem;padding-bottom:1rem}.text-white{color:#fff}.text-2xl a{color:inherit;text-decoration:none}.text-2xl a:hover{color:#ecc94b}.pb-10{padding-bottom:2.5rem}.w-1\/2{width:50%}.w-full{width:100%}.h-auto{height:auto}.text-3xl{font-size:1.875rem;font-weight:700;margin-bottom:.5rem}.text-gray-600,.text-sm{font-size:.875rem}.text-gray-600{color:#718096}.mb-4{margin-bottom:1rem}.bg-gray-200{background-color:#edf2f7}.px-3{padding-left:.75rem;padding-right:.75rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.list-disc{list-style-type:disc;padding-left:1.75rem}.my-8{margin-bottom:2rem;border-top:1px solid #e2e8f0}.text-2xl{font-size:1.5rem;font-weight:700}.mt-4{margin-top:1rem}.flex{display:flex}.justify-between{justify-content:space-between}.rounded-lg{border-radius:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}
        </style>
      </head>
      <body>
        <header class="bg-blue-500 py-4 text-white">
          <div class="container mx-auto flex items-center justify-between">
            <h1 class="text-2xl font-bold">
              <a
                href="https://www.ebay.com/usr/potrika_deals"
                class="hover:text-yellow-500"
                >Visit Our EBAY store</a
              >
            </h1>
          </div>
        </header>
        <main class="container mx-auto mt-8 pb-10">
          <div class="flex flex-wrap">
            <div class="w-1/2">
              <img
                src="${image1}"
                alt="Product Image"
                class="w-full h-auto"
              />
            </div>
            <div class="w-1/2 pl-4 py-5">
              <h2 class="text-3xl font-bold mb-2">${titles[0]}</h2>
              <p class="text-gray-600 text-sm">Condition: New</p>
            </div>
          </div>
          <hr class="my-8 border-t border-gray-300" />
          <section class="mt-4 mb-4">
            <h2
              class="text-2xl font-semibold mb-4 bg-gray-200 px-3 py-1 rounded-lg"
            >
              What's in the Box
            </h2>
            <ul class="list-disc px-10">
            </ul>
          </section>
          <hr class="my-8 border-t border-gray-300" />
          <section class="mt-8">
            <div class="flex flex-wrap">
              <div class="w-1/2">
                <img
                  src="${image2}"
                  alt="Product Image 2"
                  class="w-full h-auto"
                />
              </div>
              <div class="w-1/2 pl-4">
                <h2
                  class="text-3xl font-bold mb-2 bg-blue-500 text-white px-3 py-1 rounded-md"
                >
                  ${titles[1]}
                </h2>
                <p class="text-gray-600 text-sm pb-10">
                  ${description}
                </p>
    
                <table class="table-auto">
                  <tbody class="py-5">
                    <tr>
                      <td class="px-4 py-2 bg-gray-200 border border-black">
                        Specification 1
                      </td>
                      <td class="px-4 py-2 border border-black">Value 1</td>
                      <td class="px-4 py-2 bg-gray-200 border border-black">
                        Specification 2
                      </td>
                      <td class="px-4 py-2 border border-black">Value 2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <hr class="my-8 border-t border-gray-300"/>
          <section class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">Shipping Information</h2>
            <p class="text-gray-600 text-sm">
              Provide shipping information and details about your shipping policies
              here.
            </p>
          </section>
        </main>
      </body>
    </html>
    `;
};

export default useGenerateDesc;
