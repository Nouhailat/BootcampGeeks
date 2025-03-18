class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.items = items if items else []
        self.pageSize = int(pageSize)  
        self.totalPages = max(1, -(-len(self.items) // self.pageSize))  
        self.currentPage = 1
    def getVisibleItems(self):
        """Retourne les éléments visibles de la page actuelle."""
        start = (self.currentPage - 1) * self.pageSize
        end = start + self.pageSize
        return self.items[start:end]

    def nextPage(self):
        """Passe à la page suivante si possible."""
        if self.currentPage < self.totalPages:
            self.currentPage += 1
        return self

    def prevPage(self):
        """Retourne à la page précédente si possible."""
        if self.currentPage > 1:
            self.currentPage -= 1
        return self

    def firstPage(self):
        """Va à la première page."""
        self.currentPage = 1
        return self

    def lastPage(self):
        """Va à la dernière page."""
        self.currentPage = self.totalPages
        return self

    def goToPage(self, pageNum):
        """Va à une page spécifique en s'assurant qu'elle est dans les limites."""
        pageNum = int(pageNum)
        self.currentPage = max(1, min(self.totalPages, pageNum))
        return self

alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)
print(p.getVisibleItems()) 
p.nextPage()
print(p.getVisibleItems()) 
p.firstPage()
print(p.getVisibleItems()) 
p.goToPage(2)
print(p.getVisibleItems()) 
p.goToPage(0)
print(p.getVisibleItems()) 
p.goToPage(10)
print(p.getVisibleItems()) 