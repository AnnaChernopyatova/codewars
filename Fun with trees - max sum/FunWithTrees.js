function MaxSum(root) {
    if (!root) return 0;
    return root.value + Math.max(MaxSum(root.left),MaxSum(root.right));
}
