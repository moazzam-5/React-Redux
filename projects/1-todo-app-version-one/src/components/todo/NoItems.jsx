function NoItems({items}) {
    return<>
    {items.length === 0 && <h3 className="mt-4">Add Your Todo</h3>}
    </>
}

export default NoItems