import getChatResponse from "./workers";

describe("getChatResponse", () => {
  it("returns an object with property 'reply'", async () => {
    const response = await getChatResponse("hello");
    expect(response).toHaveProperty("reply");
  });
});
