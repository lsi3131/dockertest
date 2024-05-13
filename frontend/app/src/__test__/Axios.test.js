function getUrl(subUrl) {
    const urlRoot = 'http://127.0.0.1:8000'
    return `${urlRoot}${subUrl}`
}

const fetchFromTestServer = async () => {
    try {
        return await fetch(getUrl('/api/articles/'))
    } catch (error) {
        console.log('error', error)
        return null;
    }
};

test('test_send_axios', async () => {
    const response = await fetchFromTestServer();
    expect(response).not.toBeNull()
});
